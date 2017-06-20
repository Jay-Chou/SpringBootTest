package com.wpp.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 使用注解标注过滤器
 * 
 * @WebFilter将一个实现了javax.servlet.Filter接口的类定义为过滤器 属性filterName声明过滤器的名称,可选
 *                                                属性urlPatterns指定要过滤
 *                                                的URL模式,也可使用属性value来声明.(
 *                                                指定要过滤的URL模式是必选属性)
 * 
 * @author 单红宇(365384722)
 * @myblog http://blog.csdn.net/catoop/
 * @create 2016年1月6日
 */
@WebFilter(filterName = "MyFilter", urlPatterns = "/*")
public class MyFilter implements Filter {

	private static final Logger logger = LoggerFactory.getLogger(MyFilter.class);

	public void destroy() {
		// TODO Auto-generated method stub
		System.out.println("过滤器销毁");
	}

	public void doFilter(ServletRequest arg0, ServletResponse arg1, FilterChain arg2)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		System.out.println("执行过滤操作");
		HttpServletRequest httpServletRequest = (HttpServletRequest) arg0;
		HttpServletResponse httpServletResponse = (HttpServletResponse) arg1;
		String url = httpServletRequest.getRequestURI().substring(httpServletRequest.getContextPath().length());
		System.out.println(url);
		logger.info("dddddddddddddddd");
		arg2.doFilter(arg0, arg1);
	}

	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		System.out.println("过滤器初始化");
	}

}
