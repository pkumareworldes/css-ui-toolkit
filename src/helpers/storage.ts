const storage = window.localStorage;

const Storage = {
  isSupported() {
    const testKey = "test";
    try {
      storage.setItem(testKey, "1");
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  },
  clear() {
    const sessionExpireFlat = storage.getItem("sessionAutoExpireMsg");
    storage.clear();
    storage.setItem("sessionAutoExpireMsg", sessionExpireFlat || "");
  },
  saveUser(user: any) {
    try {
      storage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log("error", error);
    }
  },
  loadUser() {
    try {
      return JSON.parse(storage.getItem("user") || "");
    } catch (error) {
      console.log("error", error);
    }
  },
  deleteUser() {
    try {
      storage.removeItem("user");
    } catch (error) {
      console.log("error", error);
    }
  },
  saveToken(token: string) {
    try {
      storage.setItem("token", token);
    } catch (error) {
      console.log("error", error);
    }
  },
  loadToken() {
    try {
      return storage.getItem("token");
    } catch (error) {
      console.log("error", error);
      return null;
    }
  },
  deleteToken() {
    try {
      storage.removeItem("token");
    } catch (error) {
      console.log("error", error);
    }
  },
  saveUserTimeLog(data: any) {
    try {
      storage.setItem("user_time_log", JSON.stringify(data));
    } catch (error) {
      console.log("error", error);
    }
  },
  loadUserTimeLog() {
    try {
      return storage.getItem("user_time_log");
    } catch (error) {
      console.log("error", error);
      return null;
    }
  },
  deleteUserTimeLog() {
    try {
      storage.removeItem("user_time_log");
    } catch (error) {
      console.log("error", error);
    }
  },
  setLoginMsgFlag(flag: any) {
    try {
      storage.setItem("sessionAutoExpireMsg", flag);
    } catch (error) {
      console.log("error", error);
    }
  },
  getLoginMsgFlag() {
    try {
      return storage.getItem("sessionAutoExpireMsg") || "";
    } catch (error) {
      return null;
    }
  },
  setAutoLoginFlag(flag: any) {
    try {
      storage.setItem("sessionAutoExpire", flag);
    } catch (error) {
      console.log("error", error);
    }
  },
  getAutoLoginFlag() {
    try {
      return storage.getItem("sessionAutoExpire") || "";
    } catch (error) {
      return null;
    }
  },
};

if (!Storage.isSupported()) {
  console.log(
    "Your browser does not support sessionStorage. Don't worry. The app can work without it."
  );
}

export default Storage;
