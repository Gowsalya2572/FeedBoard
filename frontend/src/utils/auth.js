
const USERS_KEY = "feedboard_registered_users";
const CURRENT_USER_KEY = "feedboard_current_user";

// Get all registered accounts
export const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
};

// Register a new account
export const registerUser = ({ name, email, password }) => {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.email === normalizedEmail
  );

  if (existingUser) {
    return {
      success: false,
      message: "An account with this email already exists.",
    };
  }

  const newUser = {
    id: Date.now().toString(),
    name: name.trim(),
    email: normalizedEmail,
    password,
  };

  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  return {
    success: true,
    message: "Account created successfully! Please sign in.",
  };
};

// Sign in using registered account details
export const loginUser = ({ email, password }) => {
  const users = getUsers();
  const normalizedEmail = email.trim().toLowerCase();

  const user = users.find(
    (item) =>
      item.email === normalizedEmail &&
      item.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Incorrect email or password.",
    };
  }

  const loggedInUser = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  sessionStorage.setItem(
    CURRENT_USER_KEY,
    JSON.stringify(loggedInUser)
  );

  return {
    success: true,
    user: loggedInUser,
    message: `Welcome back, ${user.name}!`,
  };
};

// Get currently signed-in user
export const getCurrentUser = () => {
  try {
    return JSON.parse(
      sessionStorage.getItem(CURRENT_USER_KEY)
    );
  } catch {
    return null;
  }
};

// Logout
export const logoutUser = () => {
  sessionStorage.removeItem(CURRENT_USER_KEY);
};
