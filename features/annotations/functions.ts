const add = (a: number, b: number): number => {
    return a + b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multi = function(a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

// Never reaches the end
const throwError = (message: string): never => {
    throw new Error(message);
};

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

// Destructure
const logWeatherV2 = ({ date, weather }: { date: Date; weather: string }): void => {
    console.log(date);
    console.log(weather);
};

logWeather(forecast);
