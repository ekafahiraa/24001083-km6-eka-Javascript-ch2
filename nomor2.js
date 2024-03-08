const checkTypeNumber = (givenNumber) => {
  if (givenNumber) {
    // Memvalidasi tipe data parameter
    if (typeof givenNumber === "number") {
      // Mengecek apakah tipe angka genap atau ganjil
      return givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
    }
    return "Error: Invalid data type";
    // return Error("Invalid data type");
  }
  return "Error: Bro, where is the parameter?";
  // return Error("Bro, where is the parameter?");
};

// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkTypeNumber(10)); // OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)); // OUTPUT yang keluar => "GANJIL"
console.log(checkTypeNumber("3")); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber({})); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber([])); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber()); // OUTPUT yang keluar => "Error: Bro, where is the parameter?"
