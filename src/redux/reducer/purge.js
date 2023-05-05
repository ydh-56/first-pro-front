import { persistStore } from "redux-persist";
import store from "../store/index";

// persistor 객체 생성
const persistor = persistStore(store);

// purge 함수를 호출하는 액션을 정의
export const purgeStore = () => {
  persistor.purge();
};
