/*▄────────▄
  █        █
  █  Ядро  █
  █        █
  ▀────────▀*/
Object.defineProperty(global, '$', {value: {
/*┌─────────────────────────────┐
  │ Очищает все сборщики мусора │
  └─────────────────────────────┘*/
    gc: () => Object.values($.gc).forEach(callback => callback())
}});

/*▄───────────────────────────────────────────────────────────────▄
  █                                                               █
  █  Добавляет коллекцию констант в глобальную область видимости  █
  █                                                               █
  ▀───────────────────────────────────────────────────────────────▀*/
Object.defineProperty($, 'global', {set: (collection) => {
// Проходим по коллекции констант
    Object.entries(new collection).forEach((item) => {
    // Добавляем элемент коллекции в глобальную область видимости
        Object.defineProperty(global, item[0], {
            value: item[1]
        });
    });
}});

/*▄───────────▄
  █           █
  █  Консоль  █
  █           █
  ▀───────────▀*/
Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});

/*▄────────────────────────▄
  █                        █
  █  Работа с MVC-моделью  █
  █                        █
  ▀────────────────────────▀*/
// Присвоение только через скобки
require('./apply.entrypoint'); // Коллекция точек входа
require('./apply.text');       // Коллекция текстов
require('./apply.mvc');        // Архитектура проектирования (MVC-модель)
