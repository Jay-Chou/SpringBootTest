package com.wpp.goods.service.impl;

import java.util.List;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wpp.goods.bean.Goods;
import com.wpp.goods.dao.GoodsDao;
import com.wpp.goods.service.GoodsService;

@Service
@MapperScan("com.wpp.goods.dao")
public class GoodsServiceImpl implements GoodsService {

	@Autowired
	private GoodsDao goodDao;

	public Goods findById(int _goodsId) {
		// TODO Auto-generated method stub
		return goodDao.findById(_goodsId);
	}

	public List<Goods> query() {
		// TODO Auto-generated method stub
		return goodDao.query();
	}

}
