import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403);
    res.send('Not permitted');
}

const router = Router();

router.get('/login', (_, res: Response) => {
    res.send(`
             <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password"/>
                </div>
                <button>Submit</button>
             </form>
             `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    if (email && password && email === 'test' && password === 'test') {
        req.session = { loggedIn: true };
        res.redirect('/');
    } else {
        res.send('Invalid email or password');
    }
});

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
                 <div>
                    <h3>You are logged in</h3>
                    <a href="/logout">Logout</a>
                 </div>
                 `);
    } else {
        res.send(`
                 <div>
                    <h3>You are not logged in</h3>
                    <a href="/login">Login</a>
                 </div>
                 `);
    }
});

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send('Protected route!');
});

export { router };
