function timeline(data) {
    var status_map = {
        'online': 0,
        'onbreak': 1,
        'offline': 2,
        'atention': 3
    }
    var time_infos = jQuery.parseJSON(data);

    jQuery.each(time_infos, function(i, time_info) {
        var sortpos = status_map[time_info.status];
        var additionalstatus = "";
        if(time_info.additionalstatus) {
            additionalstatus = '<span class="status-additional ' + time_info.additionalstatus.icon + '"><span class="tooltip" title="' + time_info.additionalstatus.text + '">&nbsp;</span></span>';
        }

        jQuery('#timeline').append('<tr></tr>');
        jQuery('#timeline tbody tr:last-child').append('<td data-sort-value="' + sortpos + '"><div class="ico-status ico-status-' + time_info.status + '">' + time_info.status + '</div></td>');
        jQuery('#timeline tbody tr:last-child').append('<td><div class="user-info"><img src="' + time_info.avatar + '" alt="' + time_info.name + '" class="user-avatar"><a href="#" class="user-name">' + time_info.name + '</a> <div class="statusinfo statusinfo-' + time_info.status + '">' + time_info.statusinfo + '</div></div> ' + additionalstatus + '</td>');
        jQuery('#timeline tbody tr:last-child').append('<td>' + time_info.totaltime + '</td>');
        
        for (var t=0; t<12; t++)
        { 
            jQuery('#timeline tbody tr:last-child').append('<td class="time-cell"><div class="timebar-block timebar' + t + '"></td>');
        }

        jQuery.each(time_info.timeline, function(i, time_entry) {
            var hour_seconds = 7200;

            left = (time_entry.start % hour_seconds) / hour_seconds * 100 ;
            width = time_entry.length / hour_seconds * 100;
            title = '<span class=timebar-message>' + time_entry.message + '</span> ' + time_entry.total;
            slot = parseInt(time_entry.start / hour_seconds);
            jQuery('#timeline tbody tr:last-child td div.timebar-block.timebar' + slot).append('<div class="timebar '+ time_entry.timetype +' tooltip" style="width:'+ width +'%; left: ' + left + '%;" title="' + title + '">&nbsp;</div>');
        });
        
    });
}
