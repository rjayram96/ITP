package com.agro.service.Domain.CostGuide;

import org.springframework.data.annotation.Id;

public class Cost {

    @Id
    private String Cid;
    private String costName;
    private double cost;

    public String getCid() {
        return Cid;
    }

    public void setCid(String cid) {
        Cid = cid;
    }



    public String getCostName() {
        return costName;
    }

    public void setCostName(String costName) {
        this.costName = costName;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }
}
