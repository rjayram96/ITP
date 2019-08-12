package com.agro.service.Domain.MarketBasePrice;

import org.springframework.data.annotation.Id;

import java.util.Date;

public class Comments {

    @Id
    private int ID;

    private String comment;
    private Date date;

    public Comments(int ID, String comment, Date date) {
        this.ID = ID;
        this.comment = comment;
        this.date = date;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
