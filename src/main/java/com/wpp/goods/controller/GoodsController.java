package com.wpp.goods.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wpp.goods.bean.Goods;
import com.wpp.goods.service.GoodsService;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@RestController
@EnableAutoConfiguration
@RequestMapping("/goods")
public class GoodsController {

	// 注解获得服务层
	@Autowired
	private GoodsService goodsService;

	@RequestMapping("/findById")
	public String findById(@RequestParam(value = "id") int goodsid) {
		Goods goods = goodsService.findById(goodsid);
		JSONObject JsonObject = new JSONObject();
		JsonObject.put("goodsId", goods.getGoodsId());
		JsonObject.put("goodsNmae", goods.getGoodsName());
		JsonObject.put("goodsNum", goods.getGoodsNum());
		return JsonObject.toString();
	}

	@RequestMapping("/query")
	public String queryAll() {
		List<Goods> Arraylist = goodsService.query();
		JSONArray jsonArray = JSONArray.fromObject(Arraylist);
		return jsonArray.toString();

	}
}
