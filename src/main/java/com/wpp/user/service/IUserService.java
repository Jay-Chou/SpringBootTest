package com.wpp.user.service;

import java.util.List;

import com.wpp.beans.User;

public interface IUserService {
	
	// 通过id查找用户信息
	public User findById(int _id) throws Throwable;
	
	// 查询所有的用户
	public List<User> query() throws Throwable;
}
