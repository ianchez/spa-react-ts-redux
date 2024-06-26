import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchAllPhotosAsync } from "../slices/fetchAllSlice";

export const useFetchAllData = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchAllPhotosAsync());
  }, [dispatch])
}
