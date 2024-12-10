import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]); // State to store menu data
  const [loading, setLoading] = useState(true); // State to handle loading status

  useEffect(() => {
    // Fetch menu data
    fetch('http://localhost:5000/menu') // Ensure the path to menu.json is correct
      .then((res) => res.json())
      .then((data) => {
        setMenu(data); // Set the menu data
        setLoading(false); // Update loading state
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
        setLoading(false); // Ensure loading stops even on error
      });
  }, []);

  return [menu, loading]; // Return the menu and loading state
};

export default useMenu;
