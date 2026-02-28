export const getRecommendation = async (data) => {
  const res = await fetch("http://localhost:8080/api/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const detectDisease = async (formData) => {
  // NOTE: backend must support multipart/form-data on this route.
  const res = await fetch("http://localhost:8080/api/detect", {
    method: "POST",
    body: formData,
  });

  return res.json();
};
