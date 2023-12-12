package Pirveta.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Pirveta.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Товары
 */
@Entity(name = "IISPirvetaТовары")
@Table(schema = "public", name = "Товары")
public class Tovary {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Цена")
    private Double цена;

    @Column(name = "НаимТовара")
    private String наимтовара;

    @Column(name = "ЕдИзм")
    private String едизм;

    @Column(name = "Масса")
    private Double масса;

    @Column(name = "Произ")
    private String произ;


    public Tovary() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }

    public String getНаимТовара() {
      return наимтовара;
    }

    public void setНаимТовара(String наимтовара) {
      this.наимтовара = наимтовара;
    }

    public String getЕдИзм() {
      return едизм;
    }

    public void setЕдИзм(String едизм) {
      this.едизм = едизм;
    }

    public Double getМасса() {
      return масса;
    }

    public void setМасса(Double масса) {
      this.масса = масса;
    }

    public String getПроиз() {
      return произ;
    }

    public void setПроиз(String произ) {
      this.произ = произ;
    }


}