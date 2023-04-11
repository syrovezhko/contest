function decrypt(str, tokensMap, rules) {
  // Проходим по каждому ключу в правилах перевода
  Object.keys(rules).forEach(key => {
    // Заменяем каждый символ на соответствующее значение из правил
    str = str.split(key).join(rules[key]);
  });
  
  // Проходим по каждому ключу в наборе токенов
  Object.keys(tokensMap).forEach(key => {
    // Если ключ содержит "-", значит это дополнительное правило
    if (key.includes("-")) {
      // Берем зашифрованный символ из ключа и заменяем его на значение из правила перевода
      const encryptedChar = key.slice(1);
      const decryptedChar = rules[tokensMap[key]];
      str = str.split(encryptedChar).join(decryptedChar);
    } else {
      // Иначе это имя переменной, заменяем его на значение из токенов
      str = str.split(tokensMap[key]).join(key);
    }
  });
  
  return str;
}

module.exports = decrypt;