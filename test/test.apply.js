/*────────────────────────────────────────────────────────────────────────────────────────────────*/

require('../lib/apply.core');

/*────────────────────────────────────────────────────────────────────────────────────────────────*/

$.View.Auth( class {check=f=>$.text.Auth `auth:check`});
$.Model.Auth(class {init =f=>$.text.Auth `auth:good`});
$.Controller.Auth(class {
    check = $.view.Auth.check;
    init  = $.model.Auth.init;
});
$.Text.Auth(class {
    'auth:check' = 'Проверяем авторизацию...'
    'auth:good'  = 'Авторизация прошла успешно!'
});
$.Text(class {'args:list' = 'Список аргументов:'});
$.Entrypoint.Install((...args) => _=['Entrypoint.Install', args]);

entrypoint = (...args) => {
    if (args[0] == 'auth') {
        _=__filename
        $.entrypoint.Install(...args.slice(1))
    }
};

$.Entrypoint((...args) => {
    if (args[0] == 'auth') {
        _=$.text `args:list`
        _=args
        _=$.controller.Auth.check()
        _=$.controller.Auth.init()
    }
});

entrypoint

// Запуск: test/test.apply.js auth
