# api-guard-with-jwt
A middleware to verify your nodejs express api with jwt token

# Install

```bash
$ npm install api-guard-with-jwt
```

## Usage
``` bash
const guard = require('api-guard-with-jwt')
```

### Method-1
>`Use Globally`
``` bash
app.use(guard.verify('shhhhh'))
app.use('/users', usersRouter);
```
### Method-2
>`Use Single`
``` bash
router.get('/',[guard.verify('shhhhh')], async function(req, res, next) {});
```

> `Note`: here 'shhhh' is a token secrect key

## Acknowledgments 
> * jsonwebtoken

## Author

[Siraj Khan]()

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
