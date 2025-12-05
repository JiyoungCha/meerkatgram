import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reissueThunk } from "../../store/thunks/authThunk.js";

export default function Social() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAuth() {
      try {
        await dispatch(reissueThunk());
        navigate('/posts', { replace: true });
      } catch (error) {
        console.log('Social', error);
        alert('소셜 로그인 실패');
        navigate('/login', { replace: true });
      }
    }
    getAuth();
  }, []); 

  return null;
}