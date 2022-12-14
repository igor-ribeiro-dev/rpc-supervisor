### What is it?
___

A Javascript implementation of the Supervisor XML-RPC API.  

It simply exposes API methods natively and accessible to Javascript and was built using typescript.

### Installation
___

Can be installed by npm:
```shell
npm install rpc-supervisor
```

### Usage
___
Following the supervisor documentation (which can be found [here](http://supervisord.org/api.html)), I separated the APIs into two objects: ``SupervisorApi`` and ``SystemApi``.  

> **Important**: All methods return a promise of their own type.

And for that, each one has its own factory. Example:
```javascript

const {createSupervisorApi} = require('rpc-supervisor');

(async () => {
    const supervisorApi = createSupervisorApi({
        host: 'localhost',
        port: 9005,
        username: 'user',
        password: '123',
        path: '/RPC2', // Default path for supervisor configuration.
    });

    const result = await supervisorApi.getVersion();
    
    console.log(result);
})();
```

#### Factories Availabe
 - ``createSupervisorApi`` - Returns the ``SupervisorApi`` object. Which is the representation of the prefix "supervisor".
 - ``createSystemApi`` - Returns the ``SystemApi`` object. Which is the representation of the prefix "system".

### The License (MIT)
___
Released under the MIT license. See the LICENSE file for the complete wording.
Contributors

### Contributors
___
Thank you to all the authors and everyone who has filed an issue to help make xmlrpc better.