package com.wpp.user.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wpp.user.bean.User;
import com.wpp.user.dao.IUserDao;
import com.wpp.user.service.IUserService;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	private IUserDao UserDaoImpl;

	public User findById(int _id) throws Throwable {
		// TODO Auto-generated method stub
		return UserDaoImpl.findById(_id);
	}

	public List<User> query() throws Throwable {
		// TODO Auto-generated method stub
		return UserDaoImpl.query();
	}

}
