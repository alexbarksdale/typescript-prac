# Abstract Class
- Can't be used to create an obj directly
    - Ex: const test = new Test()
- Only used as a parent class
- Can contain real implementation for some methods
- Implemented methods can refer to other methods that don't actually exist yet
- Can make child classes promise to implement some other method ^

# Interfaces vs Abstract
Interfaces:
-  Sets up a contract between different classes
-  Use when we have very different objects that we want to work together
-  Promotes loose coupling

Abstract:
-  Sets up a contract between different classes
-  Use when we are trying to build up a definition of an object
-  Strongly couples classes together

# Enums
- A way to group very similar values

# Generics
- Like functions arguments, but for types in class/function definitions
- Allows us to define the type of a property/argument/return value at a future point
- Used heavily when writing reusable code

# Picking Inheritance vs Composition
- Inheritance: Characterized by an 'is a' relationship between two classes
- Composition: Characterized by a 'has a' relationship between two classes

# MISC
- Strings can be types
     - Example: type Name = 'name'
     - Redux is a great place to use this
     - In JS, all object keys are strings

# Decorators
- First argument is the prototype of the object
- Second argument is the key of the property/method/accessor on the object
- Third argument is the property descriptor
- Decorators are applied when the code for this class is ran. Not when an 
instance is created
