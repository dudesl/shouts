Shouts
=======
An example of NPM Module

Este módulo contiene 2 funcionalidades bien básicas. Lo usaremos de ejemplo para los ejercicios de linkear un módulo localmente, publicar en el registro público y en uno privado.

### HOW TO

#### ejercicio 1
1. Clonar el repo del módulo: `git@github.com:dudesl/shouts.git`
2. modificar el campo `name` del `package.json` de `shouts` con un nombre custom, para que no haya conflicto de nombres en el repo público.
3. Exponer las 2 funciones de `shouts`: `cow` y `voice`. PISTA! http://www.sitepoint.com/understanding-module-exports-exports-node-js/
4. Linkearlo localmente PISTA! http://vansande.org/2015/03/20/npm-link/

---
#### ejercicio 2
1. Crear una carpeta para el ejercício. Vamos a llamarla `app`.
2. `cd app && npm init` para inicializar `package.json`.
3. Crear `index.js` con el siguiente contenido http://goo.gl/86khsb
3. `npm install` -> nos da error pq el modulo no existe en el repo público.
4. `npm link shouts` para que linkee el módulo localmente.
5. `npm install` para instalar el resto de dependencias.
6. Ejecutar `index.js`, veremos que carga la dependencia como corresponde.

---
#### ejercicio 3
**Publicar en repo público** 

 1. Crear un usuario en NPM https://www.npmjs.com/signup 
 2. npm login para registrar las credenciales
 3. cat ~/.npmrc para chequear el authToken correspondiente
 4. npm publish para publicar

---
#### ejercicio 4
**Una vez publicado**
1.  ir al directorio `app`.
2. `npm unlink shouts` para romper el symlink local.
3. `npm install` traerá el módulo desde el registro público.


---
#### ejercicio 5
**Hacer disponible un bin script**
1. copiar el `index.js` de `app` al modulo con nombre `bin.js`
2. completar el campo `"bin"` del `package.json` del módulo
    ```
    "bin": {
      "shouts": "bin.js"
    }
    ```
3. cambiar la versión en el `package.json`
4. `npm publish` para actualizar el modulo publicado
5. `npm install -g shouts` para instalar globalmente el modulo.
6. `shouts` deberia estar disponible.

---
#### ejercicio 6
**Publicar en repo privado**

1. Setear el registro privado. 2 formas de hacerlo
  - npm set registry http://registry.npm.ml.com
    Esto lo setea en ~/.npmrc, o sea, para TODOS los módulos. Cada vez que hagamos npm publish
  - hacer un `.npmrc` local al proyecto con el siguiente contenido
    ```
    registry = http://registry.npm.ml.com/
    spin = false
    ```
2. Loguearse con el user del registro privado (pedir por mensaje privado)
  - ```npm add user```

3. publicar comun y corriente con `npm publish`

Cualquier conflicto con alguno de los comandos npm de este paso, usar el sufijo ```--registry http://registry.npm.ml.com```
