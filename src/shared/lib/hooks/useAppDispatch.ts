import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider/config/StateSchema';

export const useAppDispatch = () => useDispatch<AppDispatch>();
