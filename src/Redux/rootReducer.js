import {combineReducers} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import todoListSlice from './Slices/todoListSlice';
// import userReducer from './slices/userSlice';
// import signUpReducer from './slices/signUpSlice';
// import entityDetailsReducer from './slices/onBoarding/entityDetailsSlice';
// import holdingsDetailsReducer from './slices/onBoarding/holdingDetailsSlice';
// import exchangeDetailsReducer from './slices/onBoarding/exchangeDetailsSlice';
// import personsDetailsReducer from './slices/onBoarding/personsDetailsSlice';
// import nomineeDetailsReducer from './slices/onBoarding/nomineeDetailsSlice';
// import bankDetailsReducer from './slices/onBoarding/bankDetailsSlice';
// import dematDetailsReducer from './slices/onBoarding/dematDetailsSlice';
// import serviceMappingDetailsReducer from './slices/onBoarding/serviceMappingSlice';
// import adminReducer from './slices/admin';
// import featureRelease from './slices/featureRelease';
// import transactionsReducer from './slices/transactionsSlice';
// import productMasterSlice from './slices/ProductMasterDetails/productMasterSlice';
// import reportReducer from './slices/reports';
// import transactionsDetailsReducer from './slices/transactionsViewSlice';
// import schemeMasterDataReducer from './slices/schemeMasterSlice';
// import clientTransactionsReducer from './slices/admin/Clients/clientTransactionSlice';
// import riskProfileEmailReducer from './slices/riskProfileEmailSlice';
// import pureReducerSlice from './slices/pureReducerSlice';
const persistConfig = {
  key: 'root',
  version: 1,
   storage,
  // storage: createSecureStore(),
  whitelist: ['user', 'personsDetails', 'clientTransaction', 'pureReducer', 'featureRelease'], // Things u want to persist
  // blacklist: [], //Things u dont
};

export const rootReducer = combineReducers({
  todoList: todoListSlice
//   user: userReducer,
//   signUp: signUpReducer,
  // signUpDetails: signUpDetailsReducer,
//   entityDetails: entityDetailsReducer,
//   holdingsDetails: holdingsDetailsReducer,
//   exchangeDetails: exchangeDetailsReducer,
//   personsDetails: personsDetailsReducer,
//   nomineeDetails: nomineeDetailsReducer,
//   bankDetails: bankDetailsReducer,
//   dematDetails: dematDetailsReducer,
//   serviceMappingDetails: serviceMappingDetailsReducer,
//   admin: adminReducer,
//   productMaster: productMasterSlice,
//   transactions: transactionsReducer,
//   reports: reportReducer,
//   transactionsDetails: transactionsDetailsReducer,
//   schemeMasterData: schemeMasterDataReducer,
//   clientTransaction: clientTransactionsReducer,
//   riskProfileEmail: riskProfileEmailReducer,
//   pureReducer: pureReducerSlice,
//   featureRelease: featureRelease,
});
export const persistedReducer = persistReducer(persistConfig, rootReducer);
