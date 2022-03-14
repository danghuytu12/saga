import CounterSaga from "features/counter/CounterSaga";
import { all } from "redux-saga/effects";
function* helloSaga(){
    console.log("Hello")
}

export default function* rootSaga(){
    console.log("root saga")
    yield all([helloSaga(),CounterSaga()])
}