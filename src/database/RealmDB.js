import Realm from "realm";
import UserSchema from '../schemas/UserSchema';
import PreferenceSchema from "../schemas/PreferenceSchema";


export const getUserTable = async () => {

    try {

        const realm = await Realm.open({
            path: "User",
            schema: [UserSchema],
            schemaVersion: 1,
          });
          
        return realm

    } catch (err) {
        console.error("Failed to open User Table", err.message);
    }

}

// export const getPreferenceTable = async () => {

//     try {

//         const realm = await Realm.open({
//             path: "Preference",
//             schema: [PreferenceSchema],
//             schemaVersion: 1,
//           });
          
//         return realm

//     } catch (err) {
//         console.error("Failed to open Preference Table", err.message);
//     }

// }

