<!DOCTYPE html>
<html lang="it">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registrazione</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="stili.css">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center">Registrazione</h1>
        <form id="formRegistrazione">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Registrati</button>
        </form>
    </div>
    <script src="app.js"></script>
</body>
</html>
