package com.wpp.user.bean;

public class User {
	private int userid;
	private String username;
	
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}


//	@Override
//	public boolean equals(Object o) {
//		if (this == o)
//			return true;
//		if (o == null || getClass() != o.getClass())
//			return false;
//
//		User user = (User) o;
//
//		if (id != null ? !id.equals(user.id) : user.id != null)
//			return false;
//
//		return true;
//	}

//	@Override
//	public int hashCode() {
//		return id != null ? id.hashCode() : 0;
//	}
}
