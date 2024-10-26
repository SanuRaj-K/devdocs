export const homeList = [
  "over view",
  "landing",
  "detailing",
  "payment",
  "product listing",
];

export const apiSections = [
  {
    title: "Pet",
    methods: [
      { name: "Update an existing pet", method: "PUT", bgColor: "#FFCA4B" },
      {
        name: "Add a new pet to the store",
        method: "POST",
        bgColor: "#4CC8F5",
      },
      { name: "Finds pet by status", method: "GET", bgColor: "#40D2A0" },
      { name: "Finds pet by tag", method: "GET", bgColor: "#40D2A0" },
      { name: "Finds pet by ID", method: "GET", bgColor: "#40D2A0" },
      {
        name: "Update a pet in the store with form data",
        method: "POST",
        bgColor: "#4CC8F5",
      },
      { name: "Deletes a pet", method: "DELETE", bgColor: "#F55A5A" },
      { name: "Uploads an image", method: "POST", bgColor: "#4CC8F5" },
    ],
  },
  {
    title: "Store",
    methods: [
      { name: "Update an existing pet", method: "PUT", bgColor: "#FFCA4B" },
      {
        name: "Add a new pet to the store",
        method: "POST",
        bgColor: "#4CC8F5",
      },
      { name: "Finds pet by status", method: "GET", bgColor: "#40D2A0" },
      { name: "Finds pet by tag", method: "GET", bgColor: "#40D2A0" },
      { name: "Finds pet by ID", method: "GET", bgColor: "#40D2A0" },
      {
        name: "Update a pet in the store with form data",
        method: "POST",
        bgColor: "#4CC8F5",
      },
      { name: "Deletes a pet", method: "DELETE", bgColor: "#F55A5A" },
      { name: "Uploads an image", method: "POST", bgColor: "#4CC8F5" },
    ],
  },
  {
    title: "User",
    methods: [
      { name: "Update an existing pet", method: "PUT", bgColor: "#FFCA4B" },
      {
        name: "Add a new pet to the store",
        method: "POST",
        bgColor: "#4CC8F5",
      },
      { name: "Finds pet by status", method: "GET", bgColor: "#40D2A0" },
      { name: "Finds pet by tag", method: "GET", bgColor: "#40D2A0" },
      { name: "Finds pet by ID", method: "GET", bgColor: "#40D2A0" },
      {
        name: "Update a pet in the store with form data",
        method: "POST",
        bgColor: "#4CC8F5",
      },
      { name: "Deletes a pet", method: "DELETE", bgColor: "#F55A5A" },
      { name: "Uploads an image", method: "POST", bgColor: "#4CC8F5" },
    ],
  },
];

export const jsonData = {
  id: 1,
  username: "emilys",
  email: "emily.johnson@x.dummyjson.com",
  firstName: "Emily",
  lastName: "Johnson",
  gender: "female",
  image: "https://dummyjson.com/icon/emilys/128",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT accessToken (for backward compatibility) in response and cookies
  refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // refreshToken in response and cookies
};
