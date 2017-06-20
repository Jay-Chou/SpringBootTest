package com.wpp.user.dao;

import java.util.List;

import com.wpp.user.bean.User;

public interface IUserDao {
	// 通过id查找用户信息
	public User findById(int _id) throws Throwable;
	
	// 查询所有的用户
	public List query() throws Throwable;	
}
