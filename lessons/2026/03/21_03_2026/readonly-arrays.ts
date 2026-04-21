const config : readonly string[] = ['development', 'v2'] // одно и тоже
//const config2 : ReadonlyArray<string> = ['development', 'v2'] // одно и тоже

config.push('test')
config[0] = 'test';