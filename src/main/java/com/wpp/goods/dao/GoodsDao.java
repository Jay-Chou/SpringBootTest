package com.wpp.goods.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.wpp.goods.bean.Goods;

public interface GoodsDao {
	@Select("select * from goods where goodsid = #{goodsid}")
	public Goods findById(@Param("goodsid") int _goodsid);
	
	@Select("select * from goods")
	public List<Goods> query();
}
