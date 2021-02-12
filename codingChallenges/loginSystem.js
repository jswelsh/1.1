class DeathStar {
  // Private fields
  #users = [];
  #login = false;

  /**
   * @returns {boolean | string}
   */
  get loggedIn() {
    return this.#login || "Not logged in!";
  }

  /**
   * @returns {{ username: string, rank: string }[] | string}
   */
  get userList() {
    return this.#login
      ? this.#users.map(({ username, rank }) => ({ username, rank }))
      : "Not logged in!";
  }

  /**
   * @param {string} username
   * @param {string} password
   * @param {string} passphrase
   * @param {string} rank
   * @returns {string}
   */
  addUser(username, password, passphrase, rank) {
    if (passphrase !== "palpatineIsMyHomeboy") {
      return "You rebel scum!";
    }
    if (!username || !password) {
      return "Invalid account!";
    }
    this.#users.push(new User(username, password, rank));
    return "User added!";
  }

  /**
   * @param {string} username
   * @param {string} password
   * @returns {string}
   */
  login(username, password) {
    this.#login = false;
    const user = this.#users.find((u) => u.username === username);
    if (user && user.locked) {
      return "Account locked!";
    }
    if (user && user.isCorrectPassword(password)) {
      this.#login = true;
      return `Welcome back, ${user.username}!`;
    } else {
      return "Invalid login!";
    }
  }

  /**
   * @returns {void}
   */
  logout() {
    this.#login = false;
  }
}

class User {
  // Private fields
  #encrypt = (pwd) => Number([...pwd].map((c) => c.charCodeAt()).join(""));
  #failedAttempts = 0;
  #password = "";

  /**
   * @constructor
   * @param {string} username
   * @param {string} password
   * @param {string} rank
   */
  constructor(username, password, rank) {
    // Public
    this.username = username;
    this.rank = rank;
    this.locked = false;
    // Private
    this.#password = this.#encrypt(password);
  }

  /**
   * @param {string} password
   * @returns {boolean}
   */
  isCorrectPassword(password) {
    const match = this.#password === this.#encrypt(password);
    if (match) {
      this.#failedAttempts = 0;
    } else {
      this.#failedAttempts++;
    }
    this.locked = this.#failedAttempts >= 4;
    return match;
  }
}