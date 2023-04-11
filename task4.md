# Прощальный подарок
Изучив возможности своего компьютера, ты понимаешь, что он может отправить данные только массивом чисел. Тебе нужно передать данные на другое устройство в будущее и тебе придется сначала описать функции сериализации и десериализации данных в массив чисел и обратно. При этом надо не забыть написать проверку кода сериализатора на момент модификации (некую соль) в передаваемых данных, чтобы убедиться, что данные будут десериалиованны в будущем именно твоим кодом. Значит надо защитить свой код, чтобы его никто не модифицировал, а если модифицировал, то мы об это узнали.

## Задача
Нужно написать класс Serializer с методами serialize и deserialize. Не забыть написать генерацию проверочных данных в методе serialize() и проверку данных на подмену в методе deserialize(), чтобы убедиться в том, что это именно наши данные передаются на десериализацию и их не сгенерировал другой сериализатор.

### Интерфейс:

```js
interface Serializer {
    serialize(value: Object): Number[]

    deserialize(value: Number[]): Object
}
```

##### Список классов у входящей структуры на сериализацию:
`FrontendDeveloper`, `User`, `Problem`, `Problems`, `Test`, `Tests`

То есть вы должны принимать структуру в любом виде, которая состоит только из экземпляров этих классов. Свойства у этих экземпляров классов могут быть экземпляры классов из того же списка, массивы и примитивы из списка – number, boolean, null, undefined. При этом пустой object ({}) это не валидное значение т.к. не является экземпляром перечисленных классов.

##### Доступные переменные
В коде вашего решения вам доступны константы, в которых лежат возможные классы передаваемой структуры. Вам не нужно ничего импортировать.

```js
const FrontendDeveloper, User, Problem, Problems, Test, Tests;
```

##### Шаблон решения

```js
class Serializer {
  // your code here
}

module.exports = Serializer;
```

### Условия:
- В решении нельзя подключать сторонние файлы и использовать глобальные переменные, например `import`, `require()`, `process`, `globalThis` и т.д.
- Метод `serialize` должен возвращать массив из целочисленных значений
- Метод `deserialize` должен принимать массив из целочисленных значений, но нужно предусмотреть валидацию т.к. может прийти тип `number`
- При десериализации, в случае обнаружения изменения части исходного кода сериализатора, выбрасывать ошибку `Error('Serializer class was modified')`
- В случае обнаружения наследования сериализатора, выбрасывать ошибку `Error('Serializer class was extended')`
- При попытке сериализовать структуру из неизвестных классов, выбрасывать ошибку `Error('Unknown class')`
- При попытке сериализовать неизвестный тип примитива, выбрасывать ошибку `Error('Unsupported primitive type')`
- В остальных случаях десериализации, выбрасывать ошибку `Error('Deserialize error')`
- Решение оформлено в виде Node модуля и возвращает сам класс, а не экземпляр класса

#### Примеры проверок вашего решения
##### Проверка сериализации может быть такой

```js
const problem = new Problem(100500);
const frontendDeveloper = new FrontendDeveloper(0);
frontendDeveloper.internalFrontendMeetup.addProblem(problem);

const serializer = new Serializer();
try {
  const serialized = serializer.serialize(frontendDeveloper);
  // example: requirement test for a returned type value
  const checkEveryNumber = '\nEvery serialized array item is integer: ' + serialized.every(number => Number.isInteger(number));
} catch (e) {
  // serialization tests...
}

// serialization tests...
```

##### Проверка десериализации может быть такой

```js
// serialization code...

try {
  const deserialized = serializer.deserialize(serialized);
} catch (e) {
  // deserialization tests... 
}

// deserialization tests... 
```
