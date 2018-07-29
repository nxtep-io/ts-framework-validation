ts-framework-validation
=======================

[![pipeline status](https://gitlab.devnup.com/npm/ts-framework-validation/badges/master/pipeline.svg)](https://gitlab.devnup.com/npm/ts-framework-validation/commits/master)
[![coverage report](https://gitlab.devnup.com/npm/ts-framework-validation/badges/master/coverage.svg)](https://gitlab.devnup.com/npm/ts-framework-validation/commits/master)

A minimalistic framework for typescript based applications, with async/await and decorators support.

This plugin extends the Server for handling safe params validation.

## Getting Started

You can start using the built-in validators.

```typescript
@Controller('/hello')
export default class HelloWorldController {

  @Get('/world', [ 
    Validate.middleware('name', Params.isValidName),
  ])
  public static helloWorld(req, res) {
    return res.success({ message: `Hello, ${req.param('name')}` });
  }

}
```

Or create your own:

```typescript
const PASSWORD_MIN = 8;
const PASSWORD_MAX = 36;

/**
 * Checks if param is a valid user password.
 * 
 * @param {String} password The param to be validated
 */
export default async (password: string = ''): Promise<Boolean> => {
  if (password && password.length >= PASSWORD_MIN && password.length <= PASSWORD_MAX) {
    return true;
  }
  throw new Error(`Password must be between ${PASSWORD_MIN} and ${PASSWORD_MAX} characters`);
};

```

And then use in your controller.
```typescript
import isValidPassword from './isValidPassword';

@Controller('/hello')
export default class HelloWorldController {

  @Get('/world', [ 
    Validate.middleware('name', isValidPassword),
  ])
  public static helloWorld(req, res) {
    return return res.success({ message: `Valid password!` });
  }

}
```


## License

The project is licensed under the [MIT License](./LICENSE.md).
