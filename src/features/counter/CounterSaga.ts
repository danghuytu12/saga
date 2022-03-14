import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery } from "@redux-saga/core/effects";
import { increment } from "./counterSlice";

export function* log(action: PayloadAction) {
    console.log("log", action)
}

export default function* CounterSaga() {
    console.log("Counter saga")
    // listen actions corresponding
    yield takeEvery(increment().type, log)
}