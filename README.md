# 📚 Contactly - Learning Project

**A Full-Stack Contact Management Application**

This is a learning project built to understand and practice full-stack web development using ASP.NET Core Web API and Angular. The application demonstrates fundamental CRUD operations, API integration, and modern web development practices.

![C#](https://img.shields.io/badge/C%23-47.1%25-blue)
![HTML](https://img.shields.io/badge/HTML-31.4%25-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-21.4%25-blue)
![CSS](https://img.shields.io/badge/CSS-0.1%25-purple)

## 🎯 Learning Objectives

This project was created to learn and practice:

- **Backend Development**: Building REST APIs with ASP.NET Core
- **Frontend Development**: Creating responsive UIs with Angular
- **Database Operations**: Working with Entity Framework Core
- **HTTP Communication**: Connecting frontend to backend APIs
- **Form Validation**: Implementing client-side validation
- **Modern CSS**: Using Tailwind CSS for styling
- **Full-Stack Integration**: Connecting all pieces together

## 🛠️ Technologies Explored

### Backend (.NET)
- **ASP.NET Core 8.0** - Web API development
- **Entity Framework Core** - Database operations
- **In-Memory Database** - Simple data storage for learning
- **Swagger** - API documentation and testing
- **CORS** - Cross-origin resource sharing

### Frontend (Angular)
- **Angular 20** - Component-based frontend framework
- **TypeScript** - Type-safe JavaScript
- **Reactive Forms** - Form handling and validation
- **RxJS** - Reactive programming with Observables
- **Tailwind CSS** - Utility-first CSS framework
- **HTTP Client** - API communication

## 📖 What I Learned

### Backend Concepts
- Creating RESTful API endpoints
- Setting up Entity Framework with DbContext
- Implementing CRUD operations (Create, Read, Delete)
- Configuring CORS for cross-origin requests
- Using DTOs (Data Transfer Objects) for API requests
- Dependency injection in ASP.NET Core

### Frontend Concepts
- Angular component architecture
- Reactive forms with validation
- HTTP client for API calls
- TypeScript interfaces and models
- RxJS Observables for data handling
- Responsive design with CSS Grid and Flexbox

### Full-Stack Integration
- Connecting Angular frontend to .NET backend
- Handling asynchronous operations
- Error handling and user feedback
- Real-time UI updates after API operations

## 🚀 Getting Started

### Prerequisites
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (v18+)
- [Angular CLI](https://angular.io/cli)

### Running the Backend
```bash
cd API/Contactly/Contactly
dotnet restore
dotnet run
```
API will run on `https://localhost:7267`

### Running the Frontend
```bash
cd UI/contactly.web
npm install
ng serve
```
App will run on `http://localhost:4200`

## 📁 Project Structure

```
Contactly/
├── API/
│   └── Contactly/
│       ├── Controllers/          # API endpoints
│       ├── Data/                 # Database context
│       ├── Models/               # Data models and DTOs
│       └── Program.cs            # App configuration
└── UI/
    └── contactly.web/
        └── src/
            └── app/
                ├── models/       # TypeScript interfaces
                ├── app.ts        # Main component logic
                └── app.html      # Component template
```

## 💡 Key Learning Points

### 1. API Development
```csharp
[HttpPost]
public IActionResult AddContact(AddContactRequestDTO request)
{
    var contact = new Contact
    {
        Id = Guid.NewGuid(),
        Name = request.Name,
        Email = request.Email,
        Phone = request.Phone,
        Favourite = request.Favourite
    };
    dbContext.Contacts.Add(contact);
    dbContext.SaveChanges();
    return Ok(contact);
}
```

### 2. Form Validation
```typescript
contactsForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  email: new FormControl(null, [Validators.email]),
  phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?[\d\s\-\(\)]+$/)]),
  favorite: new FormControl(false)
});
```

### 3. HTTP Communication
```typescript
this.http.post('https://localhost:7267/api/Contacts', addContactRequest)
  .subscribe({
    next: (value) => {
      this.contacts$ = this.getContacts();
      this.contactsForm.reset();
    },
    error: (error) => console.error('Error:', error)
  });
```

## 🔍 Features Implemented

- **Add Contact**: Form with validation to create new contacts
- **View Contacts**: Display all contacts in a responsive layout
- **Delete Contact**: Remove contacts with confirmation
- **Favorite Marking**: Toggle favorite status for contacts
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: UI updates immediately after operations

## 🎨 Design Choices

- **In-Memory Database**: Perfect for learning without complex setup
- **Simple CRUD**: Focus on fundamental operations
- **Modern UI**: Tailwind CSS for quick, beautiful styling
- **Component-based**: Angular's component architecture
- **Reactive Patterns**: RxJS for handling asynchronous data

## 📚 Next Learning Steps

- Add Edit/Update functionality
- Implement a real database (SQL Server, PostgreSQL)
- Add authentication and authorization
- Write unit and integration tests
- Deploy to cloud platforms
- Add more advanced features (search, filtering, etc.)

## 🤔 Challenges Faced

- Understanding CORS configuration
- Managing state between components
- Form validation patterns
- Async data handling with Observables
- CSS Grid and Flexbox layouts

## 📝 Notes

This project uses:
- **In-Memory Database**: Data resets when API restarts
- **Development CORS**: Allows all origins (not for production)
- **Basic Error Handling**: Console logging for debugging
- **No Authentication**: Focus on core functionality

## 🙏 Acknowledgments

Created as a learning project to understand full-stack web development with .NET and Angular.

---

*This is a learning project by [@sithummadhuranga](https://github.com/sithummadhuranga) - July 2025*
