const db = require("./db");
const helper = require("../helper");

const getAllUsers = async () => {
  const rows = await db.query("select * from usersdataset");
  const data = helper.checkNullData(rows);

  return data;
};

const getUserById = async (id) => {
  const row = await db.query("select * from usersdataset where id=?", [id]);
  const data = helper.checkNullData(row);
  return data;
};

const createUser = async (user) => {
  // const nama = crypto.createHash("sha256").update(user.nama).digest("hex");

  const result = await db.query(
    "insert into usersdataset(nama, ipa, ips, mtk) values(?,?,?,?)",
    [user.nama, user.ipa, user.ips, user.mtk]
  );

  if (result.affectedRows) {
    return {
      message: "data created",
    };
  }
  return {
    message: "error",
  };
};

const editUser = async (id, user) => {
  const result = await db.query(
    "update usersdataset set nama=?, ipa=?, ips=?, mtk=? where id=?",
    [user.nama, user.ipa, user.ips, user.mtk, id]
  );

  if (result.affectedRows) {
    return {
      message: "updated",
    };
  }
  return {
    message: "failed update",
  };
};

const deleteUser = async (id) => {
  const result = await db.query("delete from usersdataset where id=?", [id]);

  if (result.affectedRows) {
    return {
      message: "deleted",
    };
  }
  return {
    message: "failed delete",
  };
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
};
