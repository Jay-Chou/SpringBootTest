package com.wpp.user.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.wpp.beans.User;
import com.wpp.user.dao.IUserDao;

import net.sf.json.JSONObject;

@Repository
public class UserDaoImpl implements IUserDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public User findById(int _id) throws Throwable {
		// TODO Auto-generated method stub
		// Connection conn = getConnection();
		String sql = "select * from user where userid = ?";
		// RowMapper<User> rowMapper = new
		// BeanPropertyRowMapper<User>(User.class);
		return (User) jdbcTemplate.queryForObject(sql, new RowMapper() {

			public Object mapRow(ResultSet paramResultSet, int paramInt) throws SQLException {
				// TODO Auto-generated method stub
				User oUser = new User();
				oUser.setUserid(paramResultSet.getInt("userid"));
				oUser.setUsername(paramResultSet.getString("username"));
				return oUser
						;
			}
		}, _id);
		// return oUser;
	}

	public List query() throws Throwable {
		// TODO Auto-generated method stub
		// Connection conn = getConnection();
		final List<JSONObject> list = new ArrayList<JSONObject>();
		String sql = "select * from user";
		// RowMapper<User> rowMapper = new
		// BeanPropertyRowMapper<User>(User.class);
		jdbcTemplate.query(sql, new RowCallbackHandler() {
			public void processRow(ResultSet paramResultSet) throws SQLException {
				// TODO Auto-generated method stub
				JSONObject jsonObject = new JSONObject();
				jsonObject.put("userid", paramResultSet.getInt("userid"));
				jsonObject.put("username", paramResultSet.getString("username"));
				list.add(jsonObject);
			}
		});
		return list;
		// PreparedStatement ps = conn.prepareStatement(sql);
		// ResultSet rs = ps.executeQuery();
		// while (rs.next()) {
		// User oUser = new User();
		// oUser.setId(rs.getInt(1));
		// oUser.setName(rs.getString(2));
		// list.add(oUser);
		// }
		// // 关闭连接
		// try {
		// if (rs != null) {
		// rs.close();
		// }
		// if (ps != null) {
		// ps.close();
		// }
		// if (conn != null) {
		// conn.close();
		// }
		// } catch (Exception e) {
		// throw new Exception(e.getMessage());
		// } finally {
		// if (list == null || list.size() <= 0) {
		// return null;
		// } else {
		// return list;
		// }
		// }
	}
}
