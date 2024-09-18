export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("app-user");
  return data;
};
export const navLinks1 = [
      {
        id: 1,
        url: "/Plans",
        label: "Plans",
      },
      {
        id: 2,
        url: "/Courses",
        label: "Courses",
      },
    ]
export const navLinks2 = [
      {
        id: 1,
        url: "/#home",
        label: "Home",
      },
      {
        id: 2,
        url: "/#about",
        label: "About",
      },
      {
        id: 4,
        url: "/#testimonials",
        label: "Testimonials",
      },
    ];
