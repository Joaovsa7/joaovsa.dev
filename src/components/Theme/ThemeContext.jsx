import React, { createContext } from 'react';
// aqui eu faço um contexto, se vc é bom de portugues
// sabe oq significa contexto
//                                  ai eu falo que o meu contexto pode ser verdadeiro ou falso
                                                    // e que eu mudo o contexto atraves de uma funcao
const ThemeContext = createContext([ true || false, () => {} ]);
export default ThemeContext;
