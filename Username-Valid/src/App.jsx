import React, { useEffect, useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [isvalid, setIsValid] = useState(false);
  const [isvalid2, setIsValid2] = useState(false);
  const [isvalid3, setIsValid3] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    setIsLoading(true);
    setUsername(e.target.value);

  };
  const checkUsernameValidity = () => {
    setIsLoading(true);

    const hasUpperCase = /[A-Z]/.test(username);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(username);
    const hasNumber = /[0-9]/.test(username);

    setIsValid(hasUpperCase);
    setIsValid2(hasSpecialChar)
    setIsValid3(hasNumber)
    setIsLoading(false);
  };
  useEffect(() => {
    if (username) {
      checkUsernameValidity();
    }
  }, [username]);
  const useDebounce = (value, delay) => {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounced(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debounced;
  };

  const debouncedUsername = useDebounce(username, 300);

  useEffect(() => {
    setIsLoading(true);
    const isValidUsername = !!debouncedUsername;
    setIsValid(isValidUsername);
    setIsLoading(false);
  }, [debouncedUsername]);

  return (
    <>
      <div className="username">
      <div className="inputusername">
      <input
          type="text"
          className="control"
          placeholder="Username"
          onChange={handleInputChange}
          value={username}
        />
        <div className={`spinner ${isLoading ? "loading" : ""}`}></div>
      </div>
        <div className={`validation ${!isvalid ? "invalid" : ""}`}>
          {username ? "Username is valid" : "Username is invalid"}
        </div>
       <div className="tour">
        <p className={isvalid ? "valid" : ""}>Uppercase and lowercase letters</p>
        <p className={isvalid2 ? "valid2" : ""}>Special Characters</p>
        <p className={isvalid3 ? "valid3" : ""}>Numbers</p>
      </div>
      </div>
     
    </>
  );
};

export default App;
