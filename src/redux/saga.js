//main functions planned:
//1. login to firebase (takeLatest) -- function that, after firebase component authenticates the user
//set user id and change status to logged in
//2. retrieve user todos from firebase -- query the todos based on user id
//appropriate firebase firewall setting needs to be set (very important) so that the signined in users
//can only access its own todos
//3. mark todo as complete -- function that takes the id and userId to delete the firebase database
//entry
//4. logoff

// export default function* rootSaga() {
//     yield all([
//       saga1(),
//       saga2()
//     ])
//   }