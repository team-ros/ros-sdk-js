# ROS - SDK

Die ROS SDK erlaubt es JavaScript Programmen, sich mit der ROS API zu verbinden.

**BEI ALLEN ENDPOINTS HANDELT ES SICH UM PROMISES.** 

Das bedeutet, dass hier entweder `.then(...).catch(...)`  verwendet werden kann, oder `async/await`

---

Promises: [https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)

```tsx
api.user().login("test@testmail.net")
.then(response => ... )
.catch(err => ... )
```

async await:

[https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/await](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/await)

```tsx
try {
	const response = await api.user().login("test@testmail.net")
	// do somthing with response
}
catch(err) {
	// do something with error
}
```

---

**BEI DEN BEISPIELEN HANDELT ES SICH UM TYPESCRIPT**

Das bedeutet, dass die Types bei den Funktionen angegeben sind. Das ist ausschließlich um zu zeigen, um welche Werte es sich hierbei handelt. Die Types werden auch in Visual Studio, Visual Studio Code und IntelliJ mittels IntelliSense oder Code Completion angezeigt.

**Beispiel:**

```tsx
// so steht es in diesem Dokument
api.user().login(email: string)

// so soll es angewandt werden
api.use().login("test@testmail.net")

// Type Beispiele
boolean => true/false
number => 1, 2, 42, ...
string => "Hello, World!
File => /* Das hier ist etwas komplizierter aber in etwa so */ document.getElementById('input').files[0];
string? => "test" /* oder auch */ undefined // das bedeutet dieser Wert kann auch ausgelassen werden
number | null => 1 /* oder auch */ null
boolean | string => true /* oder auch */ "test"
```

---

[Updates](https://www.notion.so/fdfef6523c234e718a9d658ad2b4f273)

**Inhaltsverzeichnis**

### 1. Installation

Die ROS-SDK wird über die [npm-Registry](https://www.npmjs.com/package/ros-sdk-js) zur Verfügung gestellt. Das bedeutet um sie zu installieren, reicht ein einfaches `npm i ros-sdk-js` .

### 2. Initialisierung

Die ROS-SDK besteht aus einer einzigen Klasse (`rosapi`). Um diese zu initialisieren muss sie zuallererst importiert werden. Das funktioniert sowohl unter commonjs als auch mittels ES6 imports.

**ES6 (Vue, React, TypeScript, WebPack/Babel)**

```tsx
import { rosapi } from "ros-sdk-js"
```

**commonjs**

```tsx
const { rosapi } = require("ros-sdk-js")
```

Nachdem die API importiert wurde, muss die Klasse nun initialisiert werden. Das geschieht mit dem  `new` Keyword. Zusätzlich muss als Parameter der API-Endpoint angegeben werden **(Dev: https://ros-api-v2.herokuapp.com).**

```tsx
const api = new rosapi(endpoint: string)
```

Wenn der Benutzer über Firebase registriert ist, muss der JWT-Token angegeben werden. **(Update in kürze: Version 2.0.2)**

```tsx
api.token().set("<JWT-TOKEN>")
```

Wenn dieser nicht angegeben ist, funktionieren keine der Endpoints und eine Response wird so aussehen.

```tsx
{
	status: false,
  message: "request error",
  error: {
	    status: false,
	    message: "access token not valid"
}
```

### 3. Login

Um zu überprüfen, ob ein Benutzer bereits existiert, gibt es den login Endpoint. Dieser nimmt als Argument die Email-Adresse des Benutzers und liefert unter "existing" entweder `**false`** zurück, wenn der Benutzer noch nicht im System registiriert ist, oder **`true` ,** wenn es ihn bereits gibt.

```tsx
api.user().login(email: string)
```

**Response:**

```tsx
// User ist bereits registriert
{
	status: true,
	exists: true
}

// User ist noch nicht regsiteriert
{
	status: true,
	exists: false
}

// Error
{
	status: false,
	message: "request error"
	...error
}
```

### 4. Create Directory

Um ein neues Verzeichnis zu erstellen, gibt es den createDir Endpoint. Dieser nimmt den Namen des Directories und auch die Parent-ID. Falls das Directory im Root Verzeichnis erstellt werden soll, kann die Parent-ID auch `null` oder `undefined` sein. Zurückgegeben wird unter `id`, die id des neu erstellten Ordners.

```tsx
api.object().createDir(name: string, parent?: string | null)
```

**Response**

```tsx
// Directory wurde erfolgreich erstellt
{
	status: true,
	id: "<UUID>"
}

// Parent existiert nicht
{
	status: false,
	id: null
}

// Directory mit demselben Namen existiert bereits
{
	status: false,
  id: null
}
```

### 5. Upload File

Um eine Datei hochzuladen, gibt es den Upload Endpoint. Dieser nimmt als Parameter ein File an, sowie die Parent-ID. 

```tsx
api.object().upload(file: File, parent?: string | null)
```

**Response:**

```tsx
// File wurde erfolgreich hochgeladen
{
	status: true
}

// File wurde nicht erfolgreich hochgeladen
{
	status: false
}
```

### 6. Get File/Dir

Um ein Directory-Listing zu machen oder die URL eines Files zu bekommen, gibt es die get-Funktion (Endpoint). Dieser benötigt einen Parameter (parent), der aber auch ausgelassen werden kann (`parent?: string | null`). Bei diesem handelt es sich um die ID des Objektes, über das ein Listing gemacht werden soll bzw. das File, auf das zugegriffen werden soll. `null` bedeutet, dass ein Listing über dem Root-Ordner gemacht wird.

```tsx
api.object().get(parent?: string | null)
```

**Responses:**

```tsx
// Directory Listing bei Root (null)
{
  status: true,
  listing: [
    {
      id: 'e5062b53-6f05-4e23-8eba-7c6f119dee94',
      name: 'Dokumente',
      parent: null,
      type: 'directory',
      size: null,
      date: 1602611095942
    },
    {
      id: 'ba74bf0b-f929-460b-b639-2ec2282cf07f',
      name: 'tsconfig.json',
      parent: null,
      type: 'file',
      size: 6071,
      date: 1602611095942
    }
  ]
}

// Requesting a File (url is only valid for 1h).
{
  status: true,
  url: 'https://bucketeer-a5418188-4a91-48cb-91a7-e7ae960a0e2b.s3-eu-west-1.amazonaws.com/ba74bf0b-f929-460b-b639-2ec2282cf07f?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVZH4SBSY6IYKCEHE%2F20201014%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20201014T115412Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=81f3b660a9d4b3ea1ba8a01652c435994541b6652a3b4074b91bd8d524f06d06',
}
```

### 7. Move

Um ein Object zu verschieben, gibt es den Move-Endpoint. Er erlaubt es, bei Angabe von Namen, Parent und ID, den Parent und den Namen zu ändern.

```tsx
api.object().move(parent: string | null, name: string, object_id: string)
```

**Responses:**

```tsx
// Erfolgreich "gemoved"
{ 
	status: true, 
	moved: true 
}
```

### 8. Remove (Delete)

Um ein Object zu löschen gibt es die remove-Function. Diese nimmt als Parameter alleine die object_id.

```tsx
api.object().remove(parent: string | null, name: string, object_id: string)
```

**Responses:**

```tsx
// Object wurde erfolgreich gelöscht
{ 
	status: true, 
	delete: true 
}

// Delete Vorgang nicht erfolgreich
{ 
	status: true, 
	delete: false 
}
```