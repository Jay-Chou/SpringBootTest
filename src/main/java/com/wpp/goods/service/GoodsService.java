package com.wpp.goods.service;

import java.util.List;

import com.wpp.beans.Goods;

public interface GoodsService {
	public Goods findById(int goodsId);
	
	public List<Goods> query();
}
