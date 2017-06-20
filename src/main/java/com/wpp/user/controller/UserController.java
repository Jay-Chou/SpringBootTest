package com.wpp.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wpp.user.bean.User;
import com.wpp.user.service.IUserService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@EnableAutoConfiguration
@RequestMapping("/user")
public class UserController {
	// 引入服务层
	@Autowired
	private IUserService UserServiceImpl;

	@RequestMapping("/{myName}")
	public String index(@PathVariable String myName) {
		return "Hello " + myName + "!!!";
	}

	@RequestMapping("/findById")
	public String findById(@RequestParam(value = "id") int id) {
		try {
			User oUser = UserServiceImpl.findById(id);
			JSONObject jsonObject = new JSONObject();
			jsonObject.put("id", oUser.getUserid());
			jsonObject.put("name", oUser.getUsername());
			return jsonObject.toString();
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

		// User user =
	}

	@RequestMapping("/query")
	public String query() {
		try {
			List<User> list = UserServiceImpl.query();
			JSONArray jsonArray = new JSONArray();
			jsonArray = JSONArray.fromObject(list);
			return jsonArray.toString();
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

	}
}
