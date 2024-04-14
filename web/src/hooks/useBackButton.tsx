import WebApp from "@twa-dev/sdk";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = useCallback(() => navigate(-1), [navigate]);

  useEffect(() => {
    WebApp.onEvent("backButtonClicked", handleBack);

    return () => WebApp.offEvent("backButtonClicked", handleBack);
  }, [handleBack]);

  return null;
};
