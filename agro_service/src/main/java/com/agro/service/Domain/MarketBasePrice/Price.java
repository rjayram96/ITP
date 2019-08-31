package com.agro.service.Domain.MarketBasePrice;

import org.springframework.data.annotation.Id;

import java.util.Date;

public class Price {

    @Id
    private String Id;

    private double buyingPrice;
    private double saleingPrice;
    private Date date;

    public Price(double buyingPrice, double saleingPrice, Date date) {
        this.buyingPrice = buyingPrice;
        this.saleingPrice = saleingPrice;
        this.date = date;
    }

    public double getBuyingPrice() {
        return buyingPrice;
    }

    public void setBuyingPrice(double buyingPrice) {
        this.buyingPrice = buyingPrice;
    }

    public double getSaleingPrice() {
        return saleingPrice;
    }

    public void setSaleingPrice(double saleingPrice) {
        this.saleingPrice = saleingPrice;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
