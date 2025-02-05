# **Contact API Documentation**
Base URL: **[https://retoolapi.dev/3mPAvR/contact](https://retoolapi.dev/3mPAvR/contact)**

## **Endpoints**

### **1. Get All Contacts**
**GET** `/contact`  
📌 Retrieves a list of all contacts.

**Example Request:**
```javascript
fetch("https://retoolapi.dev/3mPAvR/contact")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

---

### **2. Get a Single Contact**
**GET** `/contact/:id`  
📌 Retrieves details of a specific contact by ID.

**Example Request:**
```javascript
fetch("https://retoolapi.dev/3mPAvR/contact/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

---

### **3. Create a New Contact**
**POST** `/contact`  
📌 Adds a new contact to the list.

**Example Request:**
```javascript
fetch("https://retoolapi.dev/3mPAvR/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Alice Smith",
        email: "alice.smith@example.com",
        phone: "555-1234"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

---

### **4. Update an Entire Contact (Replace Data)**
**PUT** `/contact/:id`  
📌 Updates a contact by replacing all fields.

**Example Request:**
```javascript
fetch("https://retoolapi.dev/3mPAvR/contact/3", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Alice Brown",
        email: "alice.brown@example.com",
        phone: "999-888-7777"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

---

### **5. Update a Contact (Partial Data)**
**PATCH** `/contact/:id`  
📌 Partially updates a contact (only the fields provided).

**Example Request:**
```javascript
fetch("https://retoolapi.dev/3mPAvR/contact/3", {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        phone: "111-222-3333"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

---

### **6. Delete a Contact**
**DELETE** `/contact/:id`  
📌 Removes a contact from the list.

**Example Request:**
```javascript
fetch("https://retoolapi.dev/3mPAvR/contact/3", {
    method: "DELETE"
})
.then(response => {
    if (response.ok) console.log("Contact deleted successfully");
})
.catch(error => console.error("Error:", error));
```

---

## **Status Codes**
- **200 OK** – Request successful
- **201 Created** – Resource created
- **400 Bad Request** – Invalid input
- **404 Not Found** – Resource not found
- **500 Internal Server Error** – API error  
