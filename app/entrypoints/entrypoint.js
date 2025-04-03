/*▄─────────────────▄
  █                 █
  █  Entrypoint     █
  █  • Точка входа  █
  █                 █
  ▀─────────────────▀*/
$.Entrypoint = (...args) => {
    if (args[0] == 'auth') {
        _=$.text `args:list`
        _=args
        _=$.controller.Auth.check()
        _=$.controller.Auth.init()
    }
};
