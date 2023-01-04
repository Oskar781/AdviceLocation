import * as SQLite from "expo-sqlite";
import { Alert } from "react-native";

import { Advice } from "../models/advice";

const database = SQLite.openDatabase("advice.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS advice (
          id INTEGER PRIMARY KEY NOT NULL,
          restaurant TEXT NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          doughQuality NUMBER NOT NULL,
          qualityOfIngredients NUMBER NOT NULL,
          serviceQuality NUMBER NOT NULL,
          priceToQuality NUMBER NOT NULL,
          description TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export function insertAdvice(advice) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO advice (restaurant, title, imageUri, doughQuality, qualityOfIngredients, serviceQuality, priceToQuality, description, address, lat, lng) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          advice.restaurant,
          advice.title,
          advice.imageUri,
          advice.doughQuality,
          advice.qualityOfIngredients,
          advice.serviceQuality,
          advice.priceToQuality,
          advice.description,
          advice.address,
          advice.location.lat,
          advice.location.lng,
        ],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchAdvice() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM advice",
        [],
        (_, result) => {
          const advice = [];

          for (const dp of result.rows._array) {
            advice.push(
              new Advice(
                dp.restaurant,
                dp.title,
                dp.imageUri,
                dp.doughQuality,
                dp.qualityOfIngredients,
                dp.serviceQuality,
                dp.priceToQuality,
                dp.description,
                {
                  address: dp.address,
                  lat: dp.lat,
                  lng: dp.lng,
                },
                dp.id
              )
            );
          }
          resolve(advice);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function fetchAdviceDetails(id) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM advice WHERE id = ?",
        [id],
        (_, result) => {
          const dbAdvice = result.rows._array[0];
          const advice = new Advice(
            dbAdvice.restaurant,
            dbAdvice.title,
            dbAdvice.imageUri,
            dbAdvice.doughQuality,
            dbAdvice.qualityOfIngredients,
            dbAdvice.serviceQuality,
            dbAdvice.priceToQuality,
            dbAdvice.description,
            { lat: dbAdvice.lat, lng: dbAdvice.lng, address: dbAdvice.address },
            dbAdvice.id
          );
          resolve(advice);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export const deleteAdvice = (id) => {
  database.transaction((tx) => {
    tx.executeSql(
      "DELETE FROM  advice where id= ?",
      [id.adviceId],
      (tx, results) => {
        if (results.rowsAffected === 1) {
          Alert.alert(
            "Success",
            "Advice deleted successfully",
            [
              {
                text: "Ok",
              },
            ],
            { cancelable: true }
          );
        } else {
          alert();
        }
      }
    );
  });
};
